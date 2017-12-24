/**
 * 登录功能
 *
 * 逻辑：
 * 1.在游戏中展示一张登录背景界面
 * 2.调用 checkLogin 函数判断是否已经登录过，如果登录过，进入步骤5，否则进入步骤3
 * 3.调用 isSupport 函数判断支持的登录类型，根据登录类型显示对应的登录图标
 * 4.用户点击登录图标后，调用 login 函数打开登录面板进行登录
 * 5.登录成功后，隐藏登录按钮，显示切换账号、选择服务器、进入游戏三个按钮（可缩减），或者直接进入步骤7进入游戏
 * 6.如果用户点击了切换账号，应回到步骤3，如果用户点击了进入游戏按钮，应该进入步骤7
 * 7.退出登录界面，进入游戏
 *
 *
 * API变化：
 * 1. nest.user.init 接口被废弃，改用 egret.user.login
 */
declare module nest.user {
    /**
     * 检测是否已登录
     * @param loginInfo 请传递一个null
     * @param callback
     * @callback-param  @see nest.user.LoginCallbackInfo
     */
    function checkLogin(loginInfo: LoginInfo, callback: Function): void;
    /**
     * 调用渠道登录接口
     * @param loginInfo
     * @param callback
     * @callback-param  @see nest.user.LoginCallbackInfo
     */
    function login(loginInfo: LoginInfo, callback: Function): void;
    /**
     * 检测支持何种登录方式
     * @param callback
     * @callback-param  @see nest.user.LoginCallbackInfo
     */
    function isSupport(callback: Function): void;
    /**
     * 登录接口传递参数
     *
     */
    interface LoginInfo {
        /**
         * 登录类型：如 QQ登录，微信支付
         */
        loginType?: string;
    }
    interface LoginCallbackInfo {
        /**
         * 状态值，0表示成功
         * 该值未来可能会被废弃
         */
        status: number;
        /**
         * 结果值，0表示成功
         */
        result: number;
        /**
         * isSupport 函数返回。
         * 登录方式。
         * 以QQ浏览器为例，返回 ["qq","wx"]
         * 开发者应该主动判断登录方式，如果返回了 null ，则表示没有特殊登录方式
         */
        loginType: Array<string>;
        /**
         * checkLogin , login 函数返回。
         * 用户 token 信息，如果checkLogin函数中没有token则表示用户尚未登录
         */
        token: string;
    }
}
declare module nest.iap {
    /**
     * 支付
     * @param orderInfo
     * @param callback
     */
    function pay(orderInfo: PayInfo, callback: Function): void;
    interface PayInfo {
        goodsId: string;
        goodsNumber: string;
        serverId: string;
        ext: string;
    }
}
declare module nest.share {
    /**
     * 是否支持分享
     * @param callback
     * @callback-param {status:0, share:0}  share 1支持 0不支持
     */
    function isSupport(callback: Function): void;
    /**
     * 分享
     * @param shareInfo
     * @param callback
     * @callback-param result 0 表示分享成功，-1表示用户取消
     */
    function share(shareInfo: ShareInfo, callback: Function): void;
    /**
     * 分享接口传递参数
     */
    interface ShareInfo {
        title: string;
        description: string;
        img_title: string;
        img_url: string;
        url: string;
    }
}
declare module nest.social {
    function isSupport(callback: Function): void;
    function getFriends(socialInfo: any, callback: Function): void;
    function openBBS(socialInfo: any, callback: Function): void;
}
declare module nest.app {
    interface IDesktopInfo {
        Title: string;
        DetailUrl: string;
        PicUrl: string;
    }
    /**
     * 是否支持特定功能
     * @param callback
     * @callback-param  { status:"0" , attention :"1" , sendToDesktop : "1"} attention|sendToDesktop 1支持 0不支持
     */
    function isSupport(callback: Function): void;
    /**
     * 关注
     * @param appInfo
     * @param callback
     */
    function attention(appInfo: any, callback: Function): void;
    /**
     * 初始化浏览器快捷登陆需要的信息（目前只有猎豹可用，其他为空实现）
     * @param param
     */
    function initDesktop(param: IDesktopInfo): void;
    /**
     * 发送到桌面
     * @param appInfo
     * @param callback
     * @param callback-param result 0表示添加桌面成功，-1表示添加失败
     */
    function sendToDesktop(appInfo: any, callback: Function): void;
}
declare module nest {
    interface NestData {
        module: string;
        action: string;
        param?: Object;
    }
    function callRuntime(data: NestData, callback: any): void;
}
declare module egret_native {
    function getOption(option: string): any;
}
declare module nest.h5 {
    var uid: number;
    var appid: number;
}

//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-2015, Egret Technology Inc.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
declare class EgretH5Sdk
{
    static checkLogin(fun:Function, thisObj:any);
    static login(fun:Function, thisObj:any, loginType:string);
    static pay(para:any, fun:Function, thisObj:any);
    static attention(appId:any, id:any);
    static isOpenAttention(appId:any, id:any, callbackFun:Function, callbackFunClass:any);

    static isOpenShare(appId:any, id:any, callbackFun:Function, callbackFunClass:any);
    static share(appId:any, id:any, shareTxt:any, callbackFun:Function, callbackFunClass:any);
}
