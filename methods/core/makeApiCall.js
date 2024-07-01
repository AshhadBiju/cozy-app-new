import axios from "axios";
import ApiConfig from "@/utils/api-configs";
import ApiErrorMessages from "@/utils/api-error-messages";
import { useRouter } from "next/router";
export const makeAPICall = async ({
  urlPath = null,
  reqBody = {},
  reqMethod = "POST",
  reqHeaders = {},
  fromHook = false,
  withCredentials = true,
  successCallBack = () => {},
  errorCallBack = () => {},
  finalCallBack = () => {},
}) => {
  const response = {
    responseData: null,
    isRequestSuccess: false,
    isRequestFailed: false,
    responseHeaders: null,
    requestFailedMessage: null,
    responseStatusCode: null,
  };
  try {
    // const fetchHeaders = {};
    // const requestMetaData = getEndpointMetaData(urlPath) // used to fetch the metadata of api by accepting the pathname as parameter
    // const tokenHeaderName = requestMetaData.isGeneral ? ApiConfig.TOKEN_VALID_KEY_NAME : ApiConfig.ACCESS_TOKEN_KEY_NAME; // to change the tokenname to "Autorization" & "Tokenvalid" respectively

    // const endpointPrefix = requestMetaData.isGeneral ? baseUrl.general : baseUrl.profile // to check if the endpointPrefix is /general or /profile
    // fetchHeaders[tokenHeaderName] = requestMetaData.isGeneral ? ApiConfig.LOGIN_TOKEN_VALID : `Bearer ${getAccessTokenFromCookie()}`;
    // fetchHeaders.ClientIdentity = ApiConfig.CLIENT_IDENTITY;
    const apiResponse = await axios({
      url: ApiConfig.API_BASE_PATH + urlPath,
      method: reqMethod,
      data: reqBody,
      withCredentials: withCredentials,
    });
    response.responseStatusCode = apiResponse.status;
    response.responseData = apiResponse.data;
    response.isRequestSuccess = apiResponse.status === 200;
    response.responseHeaders = apiResponse.headers;

    if (fromHook) {
      response.successCallBack = () => successCallBack(apiResponse.data);
    } else {
      successCallBack(apiResponse.data);
    }
    // errorActionCreators.updateNetworkError(false);
  } catch (error) {
    response.isRequestFailed = true;
    if (error.code === "ERR_NETWORK" || error.code === "ECONNREFUSED") {
      // errorActionCreators.updateNetworkError(true);
      response.requestFailedMessage = "Network Error";
    } else {
      response.responseStatusCode = error.response?.status;

      response.requestFailedMessage =
        error?.response?.data?.message ||
        ApiErrorMessages[error.response?.status] ||
        "Request Failure";
    }
    if (fromHook) {
      response.errorCallBack = () =>
        errorCallBack({
          requestFailedMessage: response.requestFailedMessage,
          responseData: error?.response?.data,
        });
    } else {
      errorCallBack({
        requestFailedMessage: response.requestFailedMessage,
        responseData: error?.response?.data,
      });
    }
  }
  return response;
};
