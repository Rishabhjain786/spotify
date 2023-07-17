import React , {Component} from "react";
import {FaTwitter } from "react-icons/fa";
import {FaFacebook } from "react-icons/fa";
import {FaInstagram } from "react-icons/fa";
export default class C3 extends Component{
    render()
    {
        return(
            <div class="footer">
                <div>
                <dl class="dl1">
                <dt>Company
                    <dd>About</dd>
                    <dd>jobs</dd>
                    <dd>for the record</dd>
                </dt>
            </dl>
                </div>
                <div>
                <dl class="dl2">
                <dt>Company
                    <dd>About</dd>
                    <dd>jobs</dd>
                    <dd>for the record</dd>
                </dt>
            </dl>
                </div>
                <div>
                <dl class="dl3">
                <dt>Company
                    <dd>About</dd>
                    <dd>jobs</dd>
                    <dd>for the record</dd>
                </dt>
            </dl>
                </div>
                <div>
                <dl class="dl4">
                <dt>
                    <dd><span className="fa fa-play"><FaTwitter /></span></dd>
                    <dd><span className="fa fa-play"><FaFacebook /></span></dd>
                    <dd><span className="fa fa-play"><FaInstagram /></span></dd>
                </dt>
            </dl>
                </div>
        </div>
        )
    }
};
