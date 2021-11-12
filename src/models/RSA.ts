export interface RSAKeyInput {
  p: string;
  q: string;
  e: string;
}

export interface RSAKeyOutput {
  pub_key: {
    e: string;
    n: string;
  };
  pri_key: {
    d: string;
    n: string;
  };
}
