import React, {useState, useEffect} from 'react';
import { useStateValue } from "../components/State";
import {View, Text, StyleSheet, Button, Platform, ActivityIndicator} from 'react-native';
import { Link } from "../components/Link";
import { PageTitle } from "../components/PageTitle"; 
import { RichText } from "../components/RichText"; 
import { getStyles, Theme, getContent } from '../utils';


function Page(props) {

    const [{ view, isWeb, dimensions }, dispatch] = useStateValue();
    const styles = StyleSheet.create(
      getStyles("text_header2, text_header3, text_header4, section, content", {
        isWeb,
      })
    );
    //console.log('page props', props)

    const [ pageLoading, setPageLoading ] = useState(props.content ? false: true);
    const [ content, setContent ] = useState(props.content || {});

    if (isWeb) {
        useEffect(() => {
            (function(h,b,s,n,i,p,e,t) {
                let check = document.getElementById('honeybook-form');
                if (check){ check.parentNode.removeChild(check); }
                h._HB_ = {};h._HB_.pid = i;;;; // dan modified this line to make the forms actually load
                t=b.createElement(s);t.type="text/javascript";t.async=!0;t.src=n;
                t.id = 'honeybook-form';
                e=b.getElementsByTagName(s)[0];e.parentNode.insertBefore(t,e);
                console.log("EXECUTED HONEYBOOK CODE")
            })(window,document,"script","https://widget.honeybook.com/assets_users_production/websiteplacements/placement-controller.min.js","5f0282b0a1f62a61eedd0881");
        }, [pageLoading])
    }

    if (!props.content) {
        useEffect(() => {
            getContent({type: 'content', uid: 'contact'}).then(_content => {
                console.log('_content', _content)
                setContent(_content.content)
                setPageLoading(false);
            }).catch(err => {
                console.error(err);
            });
        }, [])
    }

    return (
        <React.Fragment>
        { pageLoading ?
            <View style={{marginTop: 200, marginBottom: 200}}>
                <ActivityIndicator color={Theme.green} size="large" />
            </View>
        : (
            <React.Fragment>
                <PageTitle title={content.page_title} style={{margin:'auto'}}/>
                    <div style={{display:'flex', flexFlow:'row wrap'}}>
                        <div style={{width:'50%', minWidth:280, margin:'0 auto'}}>
                            <div style={{display:'flex', flexDirection:'column', alignItems:'flex-end'}}>
                                <h2 style={{color:'rgb(0, 98, 51)', fontWeight:'bold', fontFamily: 'KnockoutFeatherWeight', marginBottom:0}}>QUESTIONS ABOUT PHOTOGRAPHY?</h2>
                                <p style={{margin:'2px 0', fontFamily: 'KnockoutFeatherWeight', fontSize:22}}>photography@spicygreenbook.com</p>
                                <h2 style={{color:'rgb(0, 98, 51)', fontWeight:'bold', fontFamily: 'KnockoutFeatherWeight', marginBottom:0}}>FIND AN ISSUE WITH THE WEBSITE?</h2>
                                <p style={{margin:'2px 0', fontFamily: 'KnockoutFeatherWeight', fontSize:22}}>Open a new issue / bug report on our github page:</p>
                                <p style={{margin:'2px 0', fontFamily: 'KnockoutFeatherWeight', fontSize:22}}>https://github.com/spicygreenbook-app</p>
                                <h2 style={{color:'rgb(0, 98, 51)', fontWeight:'bold', fontFamily: 'KnockoutFeatherWeight', marginBottom:0}}>OUR SLACK CHAT:</h2>
                                <p style={{margin:'2px 0', fontFamily: 'KnockoutFeatherWeight', fontSize:22}}>spicy-green-book.slack.com</p>
                            </div>
                            <img src="https://www.honeybook.com/p.png?pid=5f0282b0a1f62a61eedd0881" />
                        </div>
                        {/* <View style={{width:'50%', height:'500px', marginLeft:20, fontSize:18}}>
                            <View >
                                <RichText render={content._body} isWeb={isWeb}/>
                                {!isWeb && <Link href={'https://spicygreenbook.org/contact'} button={'button_green'} title="Go To Contact Form" />}
                            </View>
                        </View> */}
                        <div style={{minWidth:'50%', maxWidth:'500px'}}>
                            {isWeb && <View style={[styles.section]}>
                               <View style={[styles.content]}>
                                    {/* <Text style={[styles.text_header3]}>Contact Form</Text> */}
                                   <div className="hb-p-5f0282b0a1f62a61eedd0881-2" style={{display: 'inline-block', width: '100%'}}/>
                                </View>
                            </View>} 
                        </div>
                            
                    </div>
                             
            </React.Fragment>
        )}
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        color:'green'
    }
});

export default Page;