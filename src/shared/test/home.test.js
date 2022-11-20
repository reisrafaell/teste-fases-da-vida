import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Home } from "../pages";

describe("Casos de Testes fase da vida -", () => {

  test( "Valor Limite Infância -  abaixo do Limite", () => {
    const { getByText, getByLabelText } = render(<Home />);
    const button = getByText("Calcular");
    const input = getByLabelText("Informe sua idade para calcular:");
    userEvent.type(input, "-1");
    userEvent.click(button);

    expect(getByText("Resultado: Informe um valor válido")).toBeTruthy();
  });

  test("Valor Limite Infância -  Dentro do Limite", () => {
    const { getByText, getByLabelText } = render(<Home />);
    const button = getByText("Calcular");
    const input = getByLabelText("Informe sua idade para calcular:");
    userEvent.type(input, "0");
    userEvent.click(button);

    expect(getByText("Resultado: Infância")).toBeTruthy();
  });

  test("Valor Limite Infância -  no Limite", () => {
    const { getByText, getByLabelText } = render(<Home />);
    const button = getByText("Calcular");
    const input = getByLabelText("Informe sua idade para calcular:");
    userEvent.type(input, "10");
    userEvent.click(button);

    expect(getByText("Resultado: Infância")).toBeTruthy();
  });


  test("Valor Limite Infância -  acima do Limite", () => {
    const { getByText, getByLabelText } = render(<Home />);
    const button = getByText("Calcular");
    const input = getByLabelText("Informe sua idade para calcular:");
    userEvent.type(input, "11");
    userEvent.click(button);

    expect(getByText("Resultado: Adolescência")).toBeTruthy();
  });


  test("Valor Limite Adolescência - abaixo do Limite", () => {
    const { getByText, getByLabelText } = render(<Home />);
    const button = getByText("Calcular");
    const input = getByLabelText("Informe sua idade para calcular:");
    userEvent.type(input, "10");
    userEvent.click(button);

    expect(getByText("Resultado: Infância")).toBeTruthy();
  });

  test("Valor Limite Adolescência - Dentro do Limite", () => {
    const { getByText, getByLabelText } = render(<Home />);
    const button = getByText("Calcular");
    const input = getByLabelText("Informe sua idade para calcular:");
    userEvent.type(input, "11");
    userEvent.click(button);

    expect(getByText("Resultado: Adolescência")).toBeTruthy();
  });

  test("Valor Limite Adolescência - no Limite", () => {
    const { getByText, getByLabelText } = render(<Home />);
    const button = getByText("Calcular");
    const input = getByLabelText("Informe sua idade para calcular:");
    userEvent.type(input, "19");
    userEvent.click(button);

    expect(getByText("Resultado: Adolescência")).toBeTruthy();
  });

  test("Valor Limite Adolescência - acima do Limite", () => {
    const { getByText, getByLabelText } = render(<Home />);
    const button = getByText("Calcular");
    const input = getByLabelText("Informe sua idade para calcular:");
    // screen.debug();
    userEvent.type(input, "20");
    userEvent.click(button);
    //screen.debug();

    expect(getByText("Resultado: Adulto")).toBeTruthy();
  });




  
  test("Valor Limite Adulto - abaixo do Limite", () => {
    const { getByText, getByLabelText } = render(<Home />);
    const button = getByText("Calcular");
    const input = getByLabelText("Informe sua idade para calcular:");
    userEvent.type(input, "19");
    userEvent.click(button);

    expect(getByText("Resultado: Adolescência")).toBeTruthy();
  });

  test("Valor Limite Adulto - Dentro do Limite", () => {
    const { getByText, getByLabelText } = render(<Home />);
    const button = getByText("Calcular");
    const input = getByLabelText("Informe sua idade para calcular:");
    userEvent.type(input, "20");
    userEvent.click(button);

    expect(getByText("Resultado: Adulto")).toBeTruthy();
  });

  test("Valor Limite Adulto - no Limite", () => {
    const { getByText, getByLabelText } = render(<Home />);
    const button = getByText("Calcular");
    const input = getByLabelText("Informe sua idade para calcular:");
    userEvent.type(input, "64");
    userEvent.click(button);

    expect(getByText("Resultado: Adulto")).toBeTruthy();
  });

  test("Valor Limite Adulto - acima do Limite", () => {
    const { getByText, getByLabelText } = render(<Home />);
    const button = getByText("Calcular");
    const input = getByLabelText("Informe sua idade para calcular:");
    // screen.debug();
    userEvent.type(input, "65");
    userEvent.click(button);
    //screen.debug();

    expect(getByText("Resultado: Velhice")).toBeTruthy();
  });



  
  test("Valor Limite Velhice - abaixo do Limite", () => {
    const { getByText, getByLabelText } = render(<Home />);
    const button = getByText("Calcular");
    const input = getByLabelText("Informe sua idade para calcular:");
    userEvent.type(input, "64");
    userEvent.click(button);

    expect(getByText("Resultado: Adulto")).toBeTruthy();
  });

  test("Valor Limite Velhice - Dentro do Limite", () => {
    const { getByText, getByLabelText } = render(<Home />);
    const button = getByText("Calcular");
    const input = getByLabelText("Informe sua idade para calcular:");
    userEvent.type(input, "65");
    userEvent.click(button);

    expect(getByText("Resultado: Velhice")).toBeTruthy();
  });

  test("Valor Limite Velhice - no Limite", () => {
    const { getByText, getByLabelText } = render(<Home />);
    const button = getByText("Calcular");
    const input = getByLabelText("Informe sua idade para calcular:");
    userEvent.type(input, "100");
    userEvent.click(button);

    expect(getByText("Resultado: Velhice")).toBeTruthy();
  });


});
