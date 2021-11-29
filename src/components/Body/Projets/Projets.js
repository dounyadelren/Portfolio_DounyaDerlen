import React, { useState} from 'react'
import Pinterest from './Pinterest/Pinterest'
import Twitter from './Twitter/Twitter'
import Snapchat from './Snapchat/Snapchat'
import MyCinema from './MyCinema/MyCinema'
import CardActionArea from '@mui/material/CardActionArea';
import ModalCinema from './MyCinema/ModalCinema';
import ModalPinterest from './Pinterest/ModalPinterest';
import ModalSnapchat from './Snapchat/ModalSnapchat';
import ModalTwitter from './Twitter/ModalTwitter';

function Projets() {
    const [isOpenPinterest, setIsOpenPinterest] = useState(false);
    const [isOpenTwitter, setIsOpenTwitter] = useState(false);
    const [isOpenSnapchat, setIsOpenSnapchat] = useState(false);
    const [isOpenCinema, setIsOpenCinema] = useState(false);

    return (
        <div>
                <h2 className="text-center">Mes Projets</h2>
                <div className="row">
                    <div className="col-md-6">
                        <div className="card" onClick={() => setIsOpenPinterest(true)}>
                            <div className="card-body" id="pinterest">
                                <CardActionArea>
                                    <Pinterest />
                                </CardActionArea>
                            </div>
                        </div>
                        {isOpenPinterest && <ModalPinterest setIsOpenPinterest={setIsOpenPinterest} />}
                    </div>
                    <div className="col-md-6">
                        <div className="card"  onClick={() => setIsOpenTwitter(true)}>
                            <div className="card-body" id="twitter">
                                <CardActionArea>
                                    <Twitter />
                                </CardActionArea>
                            </div>
                        </div>
                        {isOpenTwitter && <ModalTwitter setIsOpenTwitter={setIsOpenTwitter} />}
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="card"  onClick={() => setIsOpenSnapchat(true)}>
                            <div className="card-body" id="snpachat">
                                <CardActionArea>
                                    <Snapchat />
                                </CardActionArea>
                            </div>
                        </div>
                        {isOpenSnapchat && <ModalSnapchat setIsOpenSnapchat={setIsOpenSnapchat} />}
                    </div>
                    <div className="col-sm-6">
                        <div className="card" onClick={() => setIsOpenCinema(true)}>
                            <div className="card-body" id="mycinema">
                                {/* <h5 class="card-title text-center">PHP Natif</h5> */}
                                <CardActionArea>
                                    <MyCinema />
                                </CardActionArea>
                            </div>
                        </div>
                        {isOpenCinema && <ModalCinema setIsOpenCinema={setIsOpenCinema} />}
                    </div>
                </div>
        </div>
    )
}

export default Projets
