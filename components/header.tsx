import React, {useState} from 'react';
import Link from "next/link";
import Image from "next/image";
import Login from "@components/login";
import {UserData} from "../pages/_app";

interface Props {
    user: UserData | undefined,
}

export default function Header({user}: Props) {
    const [isOpenLoginCP, setIsOpenLoginCp] = useState(false);

    const closeLoginBox = (): void => {
        setIsOpenLoginCp(false)
    }

    return (
        <div className={'relative'}>
            <div className={'flex bg-indigo-800 w-full h-12 justify-between pl-10 pr-16 items-center text-amber-50'}>
                <Link href={'/'}>
                    <a className={'flex items-center'}>
                        <Image src={'/210105_pspace_logo_W.png'} width={70} height={20}/>
                    </a>
                </Link>
                {user !== undefined ? <div className={'flex justify-between items-center space-x-5'}>
                    <div><p>{user.name}님</p></div>
                </div> : <div className={'cursor-pointer'} onClick={() => setIsOpenLoginCp(!isOpenLoginCP)}>LOGIN</div>}
            </div>
            {isOpenLoginCP && <Login closeLoginBox={closeLoginBox}/>}
        </div>
    )
}