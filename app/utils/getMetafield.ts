import {IMetafield} from '~/types/metafield';

const getMetafield = (metafields: IMetafield[], key: string): IMetafield => {
  const metafield = metafields.filter((metafield) => metafield.key == key)[0];
  return metafield;
};
export default getMetafield;
