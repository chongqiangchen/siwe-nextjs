import {AccountButton} from "@/components/account-button";
import MainWrapper from "@/components/layouts/mian-wrapper";

export default function Home() {
    return (
        <MainWrapper>
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <AccountButton/>
            </main>
        </MainWrapper>
    );
}
