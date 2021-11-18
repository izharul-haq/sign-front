export interface DSAKeyInput {
  p: string;
  q: string;
  x: string;
}

export interface DSAKeyOutput {
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
