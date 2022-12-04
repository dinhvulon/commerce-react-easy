import { axiosClient } from "./axiosClient";
const categoryApi = {
  async getAll (params: any): Promise<any> {
    const url = "/todos";
    const rep = await axiosClient.get(url, {
      params: params
    });
    return rep;
  }
  // get(id: string) {
  //   const url = `/todos/${id}`;
  //   return axiosClient.get(url);
  // },
  // add(data: any) {
  //   const url = "/todos";
  //   return axiosClient.post(url, data);
  // },
  // update(data: any) {
  //   if (data !== null && data !== undefined) {
  //     const url = `/todos`;
  //     return axiosClient.post(url, data);
  //   }
  // },
  // remove(id: string) {
  //   const url = `/categories/${id}`;
  //   return axiosClient.patch(url);
  // },
};
export default categoryApi;
