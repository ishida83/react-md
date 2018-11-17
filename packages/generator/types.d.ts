/* tslint:disable interface-over-type-literal */
export type DocumentedType = {
  name: string;
  description: string;
  value: string;
};

export type DocumentedPropType = string | { name: string };
export type DocumentedProp = {
  name: string;
  type: DocumentedPropType;
  defaultValue: string;
  description: string;
};

export type DocumentedGeneric = {
  name: string;
  description: string;
};

export type DocumentedProps = {
  name: string;
  description: string;
  generics: DocumentedGeneric[];
  declared: DocumentedProp[];
  inherited: DocumentedProp[];
};

export type DocumentedSource = {
  line: number;
  path: string;
};

export type DocumentedComponent = {
  name: string;
  description: string;
  source: DocumentedSource;
  props: DocumentedProps;
  generics: DocumentedGeneric[];
};
