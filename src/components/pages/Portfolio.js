import React from 'react';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Contents from '../layouts/Contents';
import Webtitle from '../layouts/Webtitle';
import ContInfo from '../layouts/ContInfo';
import PortInfo from '../info/PortInfo';
import axios from 'axios';


//함수형 컴퍼넌트 --> 좋음 , 클래스 컴퍼넌트
//함수형 com --> 리액트 훅(userEffect)
//promise , axios

class Portfolio extends React.Component {
    state = {
        isLoading : true,
        ports : []
    }

    // 동기
    getPorts = async () => {
        const {
            data : {
                data : {ports},
            },
        } = await axios.get("https://webstoryboy.github.io/react5001/src/assets/json/portfolio.json");
        //console.log(ports.data.data.ports);
        this.setState( { ports , isLoading : false } )
    }

    componentDidMount(){
        setTimeout(() => {
            //this.setState({isLoading:false});
            this.getPorts();
        } , 3000);
    }

    render(){
        const { isLoading, ports } = this.state;
        
        return (
            <div>
                {isLoading ? (
                    <div className="loading">
                        <span>로딩 중............</span>
                    </div>
                ) : (
                    <div>
                        <Header />
                        <Contents>
                            <section id="portCont">
                                <div class="container">
                                    <Webtitle text={['portfolio','site']} />
                                    <div class="port__cont">
                                        {ports.map((port) => (
                                            <PortInfo 
                                                key = {port.id}
                                                id = {port.id}
                                                title = {port.title}
                                                category = {port.category}
                                                link = {port.link}
                                                image = {port.image}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </section>
                            <ContInfo />
                        </Contents>
                        <Footer />
                    </div>
                )}
            </div>
        )
    }
}


// function Portfolio (){
//     return <div>
//                 <Header />

//                 <Contents>
//                     <section id="portCont">
//                         <div class="container">
//                             <Webtitle text={'portfolio' , 'site'}/>
//                             <div class="port__cont">
                            
//                             </div>
//                         </div>
//                     </section>
//                     <ContInfo />
//                 </Contents>   
//                 <Footer />
//             </div>
// }

export default Portfolio;