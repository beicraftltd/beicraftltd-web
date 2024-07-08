import React from "react";
import Image from "next/image";

const Chatbot: React.FC = () => {
  return (
    <section
      id="window-ribbon"
      className="siqembed siqc-convert emwin zsiq-newtheme zsiq_size2"
      data-cwview="msgarea"
    >
      <header className="" data-prop="header" data-header-type="bot">
        <div className="headercont">
          <div
            className="siq-convback sqico-larrow"
            id="showsiqconv"
            role="button"
            aria-label="Navigation go back"
            onClick={() => console.log("Go back")}
          ></div>
          <div
            className="cmplogo siq-company-logo sqico-user"
            data-prop="clogo"
            data-chttype="conv"
          >
            <span className="sqico-user hide_fontico">
              <Image
              src={''}
                // src="https://us4-files.zohopublic.com/public/SalesIQ/download/d_715023981_operators_556542000001202017?x-cli-msg=%7B%22x-siq-soid%22%3A%22715023981%22%2C%22x-siq-module%22%3A%22operators%22%2C%22x-siq-type%22%3A%22operator_image%22%2C%22x-siq-parentid%22%3A%22556542000001202017%22%2C%22x-siq-resourceid%22%3A%222_556542000001202017%22%2C%22x-siq-filetype%22%3A%22image%2Fjpg%22%2C%22x-siq-lsid%22%3A%22siq68aa76c3535fc7c8a6268de33e3651387c079cea069a13151afbcd45f1752ad4%22%2C%22x-siq-cachekey%22%3A1720272980826%2C%22x-siq-nps%22%3A%22202%22%7D"
                alt="LambdaTest Support"
                width={49}
                height={49}
                className="cmn_mdl siq-company-logo"
              />
              <canvas width="50" height="50" className="blur_userbg"></canvas>
            </span>
          </div>
          <div className="header_txt">
            <div
              className="txtelips siq-chat-attender-name"
              id="attname"
              role="header"
              title="LambdaTest Support"
            >
              LambdaTest Support
            </div>
            <div
              className="txtelips siq-about-me"
              id="attabtme"
              title="We'll be happy to Assist"
            >
              We'll be happy to Assist
            </div>
          </div>
        </div>
        <span
          className="siqchat-detl sqico-call"
          id="audiocall"
          title="Make a voice call"
          style={{ display: "none" }}
        ></span>
      </header>

      <section
        className="content chtanim siq_content"
        data-id="1720272980812"
        data-proptype="contentdiv"
      >
        <div className="chtcont" id="msgmaindiv" data-proptype="msgmaindiv">
          <div className="disply_tbl">
            <div
              className="disply_cel hide-msgactn"
              id="msgdiv"
              data-proptype="msgdiv"
            >
              <div
                className="ziq_msg agntmsg siq-agntmsg mrgT2 siq_widget"
                id="bottype_msg"
                data-msg-usrname-id="1720272979945"
              >
                <div className="siq-user-name dib-mid mB5">
                  LambdaTest Support
                </div>
              </div>
              <div
                id="1720272979945"
                className="ziq_msg agntmsg siq-agntmsg mrgT2 siq_widget lst_msg"
                data-field="message"
                data-msgid="1720272979945"
              >
                <div className="siq-user-name"></div>
                <div className="msgbx_parent">
                  <div className="msgbx" data-proptype="msgbx">
                    <span
                      className="siq-message siq-user-message"
                      data-proptype="msgholder"
                    >
                      <div className="posrel" id="cmpnt1720272979945">
                        <div className="cmpnt-wrap botsselect" id="btnurl">
                          <div
                            className="cmpnt-body-cont"
                            id="cmpnt_body1720272979945"
                          >
                            <div className="cmpnt-desc lH20 c000">
                              Hello !{" "}
                              <em className="siq-smiley" title="Wave">
                                👋
                              </em>{" "}
                              How can we help?
                            </div>
                            <div
                              id="bot_widget1720272979945"
                              data-input-card=""
                              data-hasquestion="true"
                            >
                              <div
                                className="cmpnt-optn-list"
                                id="singleselect"
                              >
                                <div data-value="I need Tech Support">
                                  I need Tech Support
                                </div>
                                <div data-value="I have a Sales/Demo Query">
                                  I have a Sales/Demo Query
                                </div>
                                <div data-value="Register For Testμ Conference">
                                  Register For Testμ Conference
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </span>
                    <div className="msg_action rgt-align">
                      <em className="sqico-reply msgreply" title="Reply"></em>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="usrinpt" id="msgbox_main" data-proptype="msgbox_main">
          <div className="txtarewrap">
            <textarea
              placeholder="Choose an option"
              aria-label="Choose an option"
              className="msgarea siq-message-textarea"
              id="msgarea"
              data-proptype="msgarea"
              disabled
              style={{ height: "71px", overflow: "hidden" }}
            ></textarea>
            <div
              className="smile_list siq-smileys-section"
              data-proptype="smilelist"
              id="smilelist"
              style={{ display: "none" }}
            ></div>
          </div>
          <div className="usractions clearfix">
            <div
              className="txtelips siq-typing-message"
              id="typgstatus"
              title=""
            ></div>
          </div>
        </div>
      </section>

      <section
        className="siqc_body sli_view siq_content"
        id="conversioncontainer"
        style={{ display: "none" }}
      >
        <div id="pastchatconv_main">
          <div id="currchatconv">
            <div
              className="siqc_cntbody"
              id="conv1720272980812"
              data-chid="1720272980812"
            >
              <div className="siqc_usrimg hide_fontico">
                <Image
                src={''}
                //   src="https://us4-files.zohopublic.com/public/SalesIQ/download/d_715023981_operators_556542000001202017?x-cli-msg=%7B%22x-siq-soid%22%3A%22715023981%22%2C%22x-siq-module%22%3A%22operators%22%2C%22x-siq-type%22%3A%22operator_image%22%2C%22x-siq-parentid%22%3A%22556542000001202017%22%2C%22x-siq-resourceid%22%3A%222_556542000001202017%22%2C%22x-siq-filetype%22%3A%22image%2Fjpg%22%2C%22x-siq-lsid%22%3A%22siq68aa76c3535fc7c8a6268de33e3651387c079cea069a13151afbcd45f1752ad4%22%2C%22x-siq-cachekey%22%3A1720272980835%7D"
                  alt="LambdaTest Support"
                  width={49}
                  height={49}
                  className="siqc_usrimg"
                />
                <canvas width="49" height="49" className="blur_userbg"></canvas>
              </div>
              <div className="siqc_msg">
                <span
                  id="convchatattendername"
                  data-propval="convchatattendername"
                  className="txtelips"
                >
                  LambdaTest Support
                </span>
                <p id="convmsg" data-propval="convmsg" className="siqc_cusmsg">
                  Hello ! 👋 How can we help?
                </p>
              </div>
              <div className="siqc_duration">
                <em
                  id="convwtime"
                  data-propval="convwtime"
                  data-convmmtime="1720272980836"
                >
                  Just now
                </em>
                <span>
                  <em className="siqc_eletype sqico-chat2"></em>
                </span>
              </div>
            </div>
          </div>
          <div id="pastchatconv"></div>
        </div>
      </section>

      <section
        className="siqc_hstrycht siq_content"
        style={{ display: "none" }}
      ></section>

      <footer className="clearfix" style={{ display: "none" }}>
        <div className="floatrg">
          <em
            className="sqico-send siq-send-button"
            data-zcqa="send-icon"
            id="sqico-send"
          ></em>
        </div>
      </footer>

      <aside
        className="siqc_edt"
        id="showsiqchatui"
        style={{ display: "none" }}
      >
        <div
          className="sqico-chat wincustom_bg"
          role="button"
          onClick={() => console.log("New conversation")}
          onKeyDown={() => console.log("New conversation")}
          tabIndex={0}
          title="New conversation"
        ></div>
      </aside>
    </section>
  );
};

export default Chatbot;
