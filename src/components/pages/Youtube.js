import React, { useEffect , useState } from 'react';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Contents from '../layouts/Contents';
import YoutubeList from '../info/YoutubeList';
import YoutubeSearch from '../info/YoutubeSearch';
import ContInfo from '../layouts/ContInfo';
import Webtitle from '../layouts/Webtitle';



function Youtube(){
    const [videos, setVideos] = useState([]);

    const start = () => {
        setTimeout(() => {
            alert("ddd");
        }, 2000);
    }

    const search = (query) => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=AIzaSyD25DVkkVmVlnIkNL1Nc_VU6yMlk76r3-E&maxResults=30&type=video`, requestOptions)
            .then(response => response.json())
            //.then(result => console.log(result.items))
            .then(result => {
                // console.log(result.items);
                setVideos(result.items);
                start();
            })
            .catch(error => console.log('error', error));

    };

    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=drake&key=AIzaSyD25DVkkVmVlnIkNL1Nc_VU6yMlk76r3-E&maxResults=30&type=video", requestOptions)
            .then(response => response.json())
            //.then(result => console.log(result.items))
            .then(result => {
                // console.log(result.items);
                setVideos(result.items);
                start();
            })
            .catch(error => console.log('error', error));
        }, []);

    return (
        <div>
            <Header />
            <Contents>
                <section id="youtubeCont">
                    <div className="container">
                        <Webtitle  text={["youtube" , "reference"]}/>
                        <div className="youtube__cont">
                            <YoutubeSearch onSearch={search} />
                            <div className="youtube">
                                <YoutubeList videos={videos}/>
                            </div>
                        </div>
                    </div>
                </section>
                <ContInfo />
            </Contents>
            <Footer/>
        </div>
    )
}

export default Youtube;