
import { AiOutlineFileSearch, AiTwotoneBank } from "react-icons/ai"; 
import { HiOutlineDocumentReport } from "react-icons/hi"; 
import { BsWallet2, BsCardChecklist } from "react-icons/bs"; 
import { MdOutlinePayment } from "react-icons/md"; 
import { RiHomeSmileLine } from "react-icons/ri"; 

 
export const sideBarData = () => [
    {
        title: "Dosya Bilgileri",
        query: "dosya-bilgileri",
        icon: < AiOutlineFileSearch />,
        url: `/detail/dosya-bilgileri`
    },
    {
        title: "Dat Raporu",
        query: "dat-raporu",
        icon: < HiOutlineDocumentReport />,
        url: `/detail/dat-raporu`
    },
    {
        title: "Sigorta Birimi",
        query: "sigorta-birimi",
        icon: < RiHomeSmileLine />,
        url: `/detail/sigorta-birimi`
    },
    {
        title: "Tahkim Birimi",
        query: "tahkim-birimi",
        icon: < AiTwotoneBank />,
        url: `/detail/tahkim-birimi`
    },
    {
        title: "Eksper Birimi",
        query: "eksper-birimi",
        icon: < BsCardChecklist />,
        url: `/detail/tahkim-birimi`
    },
    {
        title: "Ön Ödeme Birimi",
        oquery: "on-odeme-birimi",
        icon: < BsWallet2 />,
        url: `/detail/on-odeme-birimi`
    },
    {
        title: "Ödeme Birimi",
        query: "odeme-birimi",
        icon: < MdOutlinePayment />,
        url: `/detail/odeme-birimi`
    },

];
 