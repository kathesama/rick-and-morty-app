export interface Character {
  id: number;
  name:	string;
  image:	string;
  status:	string;
  species?:	string;
  gender?:	string;
  type?:	string;
  origin?:	object;
  location?:	object;
  episode?:	string[];
  url?:	string[];
  created?:	string;
}
