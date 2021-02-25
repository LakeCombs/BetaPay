import React from 'react'
import "./HomeRemain.css"
import success from "../../Photo/lightbulb.png"
import save from '../../Photo/thinking.png'
import upward from "../../Photo/cograt.png"

function HomeRemain() {

    const HomeCard=({img,Head,story, src, story1})=>{
        return(
            <div className="HomeCard">
                <div className="HomeCArdImage">
                    <img src={src} />
                </div>
                <h2>success
                    {Head}
                </h2>
               <h3>{story}</h3>
               <h3>
                   {story1}
               </h3>
               <a>go here</a>
            </div>
        )
    }
    return (
        <div className='HomeReamin'>
            <h2 className="HomeREaminheader">
                dummy test
            </h2>
            <div className="HomeCardHolder">
                <HomeCard story="thello ahoe thiuus lkyeoooifndkn" Head="Investd in" story1=" so whaat is theoap ipoieh hihhuiifwjwn oewfonwooo" src={save}/>
                <HomeCard story="i boudghtu oj  nhhuurirjn nhddhittee nhgjirj" Head="thak ou betapay" story1="thieh bddfo heeieo hutojk hdeoej hkddpepekk bkokl" src={success} />
                <HomeCard story="yyuuu nhhuueo hjueojk nhjuyeio mnkjhito hddgetrryi" Head="Cah out utith"  story1="thio abhhngkbyeroto nffhjeon nhgoeeohgkrmvkl" src={upward}/>
            </div>
        </div>
    )
}

export default HomeRemain
