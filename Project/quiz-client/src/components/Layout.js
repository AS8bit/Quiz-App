import { AppBar, Container, Typography } from "@mui/material";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import useStateContext from "../hooks/useStateContext";


export default function Layout() {
    const { resetContext } = useStateContext()
    const navigate = useNavigate()

    const logout = () => {
        resetContext()
        navigate("/")
    }

    return (
        <>
            <AppBar position="sticky">
                <toolbar sx={{ width: 640, m: 'auto' }}>
                    <Typography variant="h4" align="center" sx={{ flexGrow: 1 }}>
                        Quiz App
                    </Typography>
                    <button onClick={logout}>Logout</button>
                </toolbar>
            </AppBar >
            <Container>
                <Outlet />
            </Container>

        </>
    )
}