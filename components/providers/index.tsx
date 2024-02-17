"use client";

import {WagmiProvider} from "@/components/providers/wagmi";
import {PropsWithChildren} from "react";
import {SessionProvider} from "@/components/providers/session";

const Providers: React.FC<PropsWithChildren> = ({children}) => {
    return (
        <SessionProvider>
            <WagmiProvider>
                {children}
            </WagmiProvider>
        </SessionProvider>
    )
}

export default Providers;
