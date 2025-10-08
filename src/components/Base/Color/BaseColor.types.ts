export type RuleDeclaration = {
  property: string;
  value: string;
}

export type StyleDeclaration = {
  selector: string;
  rules: RuleDeclaration[];
};
