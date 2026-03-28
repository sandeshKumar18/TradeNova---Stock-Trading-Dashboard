import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/user-event";
import Hero from "../landing_Page/home/Hero";


describe('Hero component' , ()=> {
    test('reners hero image', ()=>{
        render(<Hero />);
        const heroimage = screen.getByAltText("HeroImage");
        expect(heroimage).toBeInTheDocument();
        expect(heroimage).toHaveAttribute("src" , '/media/Images/homeHero.png');
    });
});