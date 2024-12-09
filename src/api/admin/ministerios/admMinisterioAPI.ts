import api from "api/api";
import {
  ListMembroMinisterioDTO,
  ListMinisterioDTO,
  ListMinisterioRawDTO,
  ListMinisterioRawV2DTO,
  MinisterioAdmDTO,
  MinisterioAdmDTOV2,
} from "types/admDTOTypes";
import { loadTokenAPI } from "utils/mainUtils";

export const listMinisterioAdmService = async (): Promise<
  ListMinisterioDTO[] | undefined
> => {
  try {
    const response = await api.get("/administrador/ministerio", {
      headers: { Authorization: loadTokenAPI() },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Can't list the ministerios");
  }
};

export const addMinisterioAdmService = async (
  dto: MinisterioAdmDTO,
) => {
  try {
    const response = await api.post(
      "/administrador/ministerio",
      dto,
      {
        headers: {
          Authorization: loadTokenAPI(),
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Can't add a ministerio");
  }
};

export const addMinisterioV2AdmService = async (
  dto: MinisterioAdmDTO,
) => {
  try {
    const response = await api.post(
      "/administrador/ministerio/v2/create",
      dto,
      {
        headers: {
          Authorization: loadTokenAPI(),
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Can't add a ministerio");
  }
};

export const editarMinisterioAdmService = async (
  idMinisterio: string,
  dto: MinisterioAdmDTO,
) => {
  try {
    const response = await api.put(
      `/administrador/ministerio/${idMinisterio}/edit`,
      dto,
      {
        headers: {
          Authorization: loadTokenAPI(),
        },
      },
    );
    return response.data;
  } catch (error) {
    throw new Error("Can't edit a ministerio");
  }
};

export const editarMinisterioV2AdmService = async (
  idMinisterio: string,
  dto: MinisterioAdmDTOV2,
) => {
  try {
    const response = await api.put(
      `/administrador/ministerio/${idMinisterio}/v2/edit`,
      dto,
      {
        headers: {
          Authorization: loadTokenAPI(),
        },
      },
    );
    return response.data;
  } catch (error) {
    throw new Error("Can't edit a ministerio v2");
  }
};

export const listMinisterioByIdAdmService = async (
  idMinisterio: string,
): Promise<ListMinisterioRawDTO> => {
  try {
    const response = await api.get(
      `/administrador/ministerio/${idMinisterio}`,
      {
        headers: {
          Authorization: loadTokenAPI(),
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Can't list ministerio by id");
  }
};

export const listMinisterioByIdV2AdmService = async (
  idMinisterio: string,
): Promise<ListMinisterioRawV2DTO> => {
  try {
    const response = await api.get(
      `/administrador/ministerio/v2/${idMinisterio}`,
      {
        headers: {
          Authorization: loadTokenAPI(),
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Can't list ministerio v2 by id");
  }
};

export const listMembrosMinisteriosAdmService = async (
  idMinisterio: string,
): Promise<ListMembroMinisterioDTO[]> => {
  try {
    const response = await api.get(
      `/membros/ministerio/coordenador/membroMinisterio/list/${idMinisterio}`,
      {
        headers: {
          Authorization: loadTokenAPI(),
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Can't list membros ministerios");
  }
};

export const deleteMinisterioAdmService = async (
  idMinisterio: string,
) => {
  try {
    const response = await api.delete(
      `/administrador/ministerio/${idMinisterio}`,
      {
        headers: {
          Authorization: loadTokenAPI(),
        },
      },
    );
    return response.data;
  } catch (error) {
    throw new Error("Can't delete a ministério");
  }
};
