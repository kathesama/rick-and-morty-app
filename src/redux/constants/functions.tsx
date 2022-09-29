export const responseSuccessStructure = (response: any) : any => ({
  code: response.status,
  statusText: response.statusText,
  status: response.data.success,
  data: response.data || [],
});

export const responseErrorStructure = (error: any) : any => ({
  code: error.response.status,
  status: error.response.data.error,
  statusText: error.response.statusText,
});
