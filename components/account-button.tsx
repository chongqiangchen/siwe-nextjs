'use client';

import React from 'react';

import { useWeb3Modal } from '@web3modal/wagmi/react';
import { useSession } from 'next-auth/react';

import {Icons} from "@/components/icons";

export const AccountButton: React.FC = () => {
  const { open } = useWeb3Modal();
  const { status } = useSession();

  function handleClick() {
    open().catch(console.error);
  }

  return (
   <div className="relative">
     <button className="rounded-none w-[182px] py-3 font-bold bg-[#EAFF00] relative z-10" onClick={handleClick} disabled={status === 'loading'}>
         {status === 'authenticated' ? "已连接" : (
             <div className="flex items-center gap-3 justify-center">
                 <Icons.wallet className="w-4 h-4" />
                 <span>连接钱包</span>
             </div>
         )}
     </button>
     <div className="absolute inset-y-[-4px] inset-x-[-8px] bg-[#000] -skew-x-6" />
   </div>
  );
};
