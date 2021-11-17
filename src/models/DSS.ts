export interface DSSKeyInput {
  p: string;
  q: string;
  x: string;
}

export interface DSSKeyOutput {
  pub_key: {
    p: string;
    q: string;
    g: string;
    y: string;
  };
  pri_key: {
    x: string;
  };
}
