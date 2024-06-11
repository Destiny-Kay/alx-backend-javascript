import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let res = {};
  try {
    const uploadRes = await uploadPhoto();
    const userRes = await createUser();
    res = { uploadRes, userRes };
  } catch (error) {
    res = { photo: null, user: null };
  }
  return res;
}
