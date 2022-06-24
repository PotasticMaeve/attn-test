import { render, screen } from '@testing-library/react';
import App from "./App"
import DisplayImg from './components/DisplayImg';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import { MainProvider } from './context/MainContext';

test("If title is rendered", () => {
    render(<MainProvider><App /></MainProvider>);
    expect(screen.getByText("Media App"));
});

test("If searchbar is rendered", () => {
    const component = <MainProvider><Searchbar /></MainProvider>
    const { getByTestId } = render(component);
    expect(getByTestId("input"));
});

test("If menu list is rendered", () => {
    const component = <MainProvider><Navbar /></MainProvider>
    const { getByTestId } = render(component);
    expect(getByTestId("menu_list"));
});

test("If image wrapper is rendered", () => {
    const component = <MainProvider><DisplayImg /></MainProvider>
    const { getByTestId } = render(component);
    expect(getByTestId("img_wrap"));
});