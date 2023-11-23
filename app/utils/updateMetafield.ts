import {IMetafield} from '~/types/metafield';

const updateMetafields = (metafields: IMetafield[], metafield: IMetafield) => {
  const {key} = metafield;
  const updatedMetafields = metafields.filter(
    (metafield) => metafield.key != key,
  );
  updatedMetafields.push(metafield);
  return updatedMetafields;
};
export default updateMetafields;
