import React from "react";
import { Ellipsis } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getWallet } from "@/services/apis";
import { formatCardExpiry } from "@/lib/utils";
import WalletCompSkeleton from "./skeletons/WalletSkeleton";
const WalletComp = () => {
    const { data, isLoading } = useQuery({
        queryKey: ["walletData"],
        queryFn: getWallet
    })
    const firstCard = data?.cards[0]
    const secondCard = data?.cards[1]
    if(isLoading) return <WalletCompSkeleton />
    return <>
        <div className="flex align-center justify-between">
            <h2 className="text-base font-semibold mb-3">Wallet</h2>
            <Ellipsis />
        </div>

        <div className="relative w-full max-w-md mx-auto h-[360px]">
            <div className="rounded-2xl h-[210px]  bg-gradient-to-br from-[#4A4A49]  to-[#111827] text-white p-6 shadow-xl">
                <div className="flex flex-col items-start gap-2 justify-between">
                    <div>
                        <p className="text-sm font-medium opacity-80">{firstCard?.bank?.split("|")[0]} <span className="text-gray-400">| {firstCard?.bank?.split("|")[1]}</span></p>
                    </div>
                    <div className="flex w-full justify-between items-center gap-3">
                        <div className="w-10 h-8 rounded-md bg-[rgba(255,255,255,0.12)] flex items-center justify-center">
                            <img src="/chip.svg" className="w-6 h-4 rounded-sm " />
                        </div>
                        <div className="flex items-center justify-center">
                            <img src="/contactless.svg" className="w-7 h-7 rounded-sm" />
                        </div>
                    </div>
                    <div className="mt-4 text-[18px] md:text-lg tracking-[0.3em] font-semibold">{firstCard?.cardNumber}</div>
                </div>
                <div className="w-full rounded-md flex items-center justify-end pt-3">
                    <img src="/international.svg" className="w-6 h-4 rounded-sm" />
                </div>
            </div>

            <div className="h-[172px] absolute left-6 right-6 top-35 z-9">
                <div className="h-[172px] relative w-full rounded-xl overflow-hidden backdrop-blur-sm  border border-white/10 bg-gradient-to-br from-white/40  to-white/10 shadow-lg p-5">
                    <div className="flex items-start justify-between">
                        <div className="w-full">
                            <p className="text-xs font-medium text-white mb-3">{secondCard?.bank?.split("|")[0]} <span className="text-white">| {secondCard?.bank?.split("|")[1]}</span></p>

                            <div className="flex w-full justify-between items-center gap-3">
                                {/* chip placeholder */}
                                <div className="w-10 h-8  rounded-md flex items-center justify-center">
                                    <img src="/chip.svg" className="w-6 h-4 rounded-sm " />
                                </div>
                                <div className="flex items-center justify-center">
                                    <img src="/contactless.svg" className="w-5 h-5 rounded-sm" />
                                </div>
                            </div>

                            <div className=" font-semibold tracking-wide text-base  text-gray-900">{secondCard?.cardNumber}</div>
                            <div className="flex items-center justify-between">

                                <div className="text-xs text-gray-400 mt-1">{formatCardExpiry(secondCard?.expiryMonth, secondCard?.expiryYear)}</div>
                                <div className="text-xs font-bold text-[#1e3a8a] p-1">{secondCard?.network?.toLocaleUpperCase()}</div>
                            </div>
                        </div>


                    </div>


                </div>
            </div>
        </div></>
}
export default WalletComp