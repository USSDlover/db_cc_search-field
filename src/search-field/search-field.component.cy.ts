const example = /* HTML */ `<sp-search-field>
  <input spSearchFieldInput aria-label="Search" placeholder="Search" />
</sp-search-field>`;

describe("SearchField", () => {
  it("clears the input when Escape is pressed", () => {
    cy.mount(example);
    cy.get("input").type("search query");
    cy.realPress("Escape");
    cy.get("input").should("have.value", "");
  });

  it("submits the search when Enter is pressed", () => {
    const onSubmit = cy.stub();
    cy.mount(
      `<sp-search-field>
          <input
            spSearchFieldInput
            (spSearchFieldSubmitted)="onSubmit($event)"
            aria-label="Search"
            placeholder="Search"
          />
        </sp-search-field>`,
      { componentProperties: { onSubmit } }
    );
    cy.get("input").type("s");
    cy.realPress("Enter");
    cy.wrap(onSubmit).should("be.calledOnceWith", "s");
  });

  it("should set the value to empty on clear action", () => {
    const value = "";

    cy.mount(`<sp-search-field>
        <input
            spSearchFieldInput
            [(ngModel)]="value"
            (spSearchFieldCleared)="value = ''"
            type="search"
         />
    </sp-search-field>`, { componentProperties: {} });
    cy.mount(example);
    cy.get("input").type("search query");
    cy.findByRole("button").click();
    cy.wait(500);
    expect(value).to.equal("");
  });

  it("clears the input when clear button is pressed", () => {
    cy.mount(example);
    cy.get("input").type("search query");
    cy.findByRole("button").click();
    cy.wait(500);
    cy.get("input").should("have.value", "");
  });

  it("refocus into the input on clear button click", () => {
    cy.mount(example);
    cy.get("input").type("search query");
    cy.findByRole("button").click();
    cy.get("input").should("be.focused");
  });

  it("sets the expected aria-label on the clear button", () => {
    cy.mount(example);
    cy.get("input").type("search query");
    cy.findByRole("button", { name: "Clear search" });
  });

  it("focuses the input when the box (including the search icon) is clicked", () => {
    cy.mount(example);
    cy.root().realClick({ x: 8, y: 15 });
    cy.get("input").should("be.focused").blur();
    cy.root().realClick({ x: 18, y: 15 });
    cy.get("input").should("be.focused").blur();
    cy.root().realClick({ x: 290, y: 15 });
    cy.get("input").should("be.focused");
  });
});
