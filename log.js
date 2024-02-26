import { isUploadSwitch, LogServiceURL } from './config.js'
import { navigatorSendBeacon } from './beacon.js';

export function error(msg){
  console.error(`时间: ${new Date().toLocaleDateString()}, 信息：${msg}`)
  // 上传信息
  if(!isUploadSwitch) return false;
  navigatorSendBeacon(LogServiceURL, msg)
}

export function warn(msg){
  console.warn(`时间: ${new Date().toLocaleDateString()}, 信息：${msg}`)
  // 上传信息
  if(!isUploadSwitch) return false;
  navigatorSendBeacon(LogServiceURL, msg)
}

export function info(msg){
  console.info(`时间: ${new Date().toLocaleDateString()}, 信息：${msg}`)
  // 上传信息
  if(!isUploadSwitch) return false;
  navigatorSendBeacon(LogServiceURL, msg)
}

export function log(msg){
  console.log(`时间: ${new Date().toLocaleDateString()}, 信息：${msg}`)
  // 上传信息
  if(!isUploadSwitch) return false;
  navigatorSendBeacon(LogServiceURL, msg)
}



