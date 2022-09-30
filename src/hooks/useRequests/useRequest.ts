import { DocumentNode, useQuery } from '@apollo/react-hooks';
import { CharacterSchemaInterface } from '../../graphql/InterfaceTypes';

const useCharacterQuery = (gqlQuery: DocumentNode) => {
  const { loading, error, data } = useQuery<CharacterSchemaInterface>(gqlQuery);
  return { loading, error, data };
};

export {
  // eslint-disable-next-line import/prefer-default-export
  useCharacterQuery,
};
