export abstract class Region {
  children?: Region[];
  checked: boolean = true;
  id: number;
  name: string;

  constructor() {}

  getState(): boolean {
    return this.checked;
  }

  getName(): string {
    return this.name;
  }

  getId(): number {
    return this.id;
  }

  getChild(index: number): Region | null {
    return this.hasChildren() ? this.children[index] : null;
  }

  hasChildren(): boolean {
    return !!this.children && !!this.children.length;
  }

  check(): void {
    this.checked = true;
  }

  uncheck(): void {
    this.checked = false;
  }
}
