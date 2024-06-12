import { useEffect, useState } from "react";
import { makeAPICall } from "@/methods/core/makeApiCall";

//useFetch can be used to make api calls

/**
 @param method: 'GET'/'POST'
 @param apiPath: API request path. base_url will be appended
 @param requestBody: request body, can be an object or function
 @param skipFlag: a stateful boolean value to decide weather to skip request
 @param refetchFlags: an array of stateful values to trigger refetch. values should be stateful
 @param successCallBack: callback to execute if request completion status is success
 @param errorCallBack: callback to execute if request completion status is fail
 @param finalCallBack: callback to execute if request completion status either success/fail
*/

export const useFetch = ({
  method = "GET",
  apiPath,
  requestBody = {},
  skipFlag = false,
  refetchFlags = [],
  successCallBack = () => {},
  errorCallBack = () => {},
  finalCallBack = () => {},
}) => {
  const [isLoading, setLoading] = useState(!skipFlag);
  const [isError, updateErrorStatus] = useState(false);
  const [responseData, setResponseData] = useState({
    data: [],
    status: null,
    message: null,
  });

  const [refetchTrigger, updateRefetchTrigger] = useState(0);

  useEffect(() => {
    const abortController = new AbortController();
    if (!skipFlag) {
      setLoading(true);
      const apiParams = {
        reqMethod: method,
        urlPath: apiPath,
        fromHook: true,
        successCallBack,
        errorCallBack,
      };
      if (requestBody instanceof Function) {
        apiParams.reqBody = requestBody();
      } else {
        apiParams.reqBody = requestBody;
      }
      makeAPICall(apiParams).then((res) => {
        setLoading(false);
        setResponseData(res.responseData);
        updateErrorStatus(res.isRequestFailed);
        if (res.isRequestFailed) {
          res.errorCallBack();
        } else {
          res.successCallBack();
        }
      });
    }
    return () => {
      abortController.abort();
    };
  }, [skipFlag, ...refetchFlags, refetchTrigger]);

  const triggerRefetch = () => {
    // this callback can be used to trigger refetch on network request
    updateRefetchTrigger(refetchTrigger + 1);
  };

  return [
    isLoading,
    isError,
    responseData,
    triggerRefetch,
    refetchTrigger === 0,
  ];
};
