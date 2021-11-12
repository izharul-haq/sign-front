export interface ElgamalKeyInput {
  p: string;
  q: string;
  x: string;
}

export interface ElgamalKeyOutput {
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
