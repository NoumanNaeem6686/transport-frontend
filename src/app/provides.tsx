"use client";
import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { Toaster } from "react-hot-toast";
export interface ProvidersProps {
    children: React.ReactNode;

}

export function Providers({ children }: ProvidersProps) {
    return (
        <NextUIProvider>

            <Toaster
                position="top-right"

            />
            {children}
        </NextUIProvider>
    );
}