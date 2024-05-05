import client from "../utils/base-client.utils";

export class FilesService {
  async getData() {
    try {
      const { data } = await client.get("/data");
      return data
    } catch (err) {
      return err.response.data;
    }
  }

  async getDataByFileName(value) {
    try {
      const { data } = await client.get(`/data?fileName=${value}`);
      return data
    } catch (err) {
      return err.response.data;
    }
  }


  async getListFileData() {
    try {
      const { data } = await client.get("/list");
      return data
    } catch (err) {
      return err.response.data;
    }
  }
}

