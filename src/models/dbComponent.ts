export interface IDbComponentProp {
  type: string;
  description: string;
  required: boolean;
  default: string;
}

export interface IDbComponent {
  _id: string;
  name: string;
  description: string;
  props: Record<string, IDbComponentProp>;
}
