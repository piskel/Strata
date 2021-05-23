
import { Button } from '@chakra-ui/button';
import { Badge, Box, Code, Link, VStack } from '@chakra-ui/layout';
import React, { BaseSyntheticEvent } from 'react';

import { AiOutlineUpload } from 'react-icons/ai'
import { Strata } from '../strata';


export default class FileUpload extends React.Component
{
  state = {
    loading: false,
    dragndropElement: undefined,
    strata: new Strata(),
    cid: "",
    isUploadable: false
  };

  constructor(props: React.ComponentProps<any>)
  {
    super(props);

    this.initEvents = this.initEvents.bind(this)
    this.dragEnter  = this.dragEnter.bind(this)
    this.dragLeave  = this.dragLeave.bind(this)
    this.drop       = this.drop.bind(this)
    this.upload     = this.upload.bind(this)
    this.click      = this.click.bind(this)
    this.addFile    = this.addFile.bind(this)
  }

  async componentDidMount()
  {
    await this.state.strata.initNode()
  }

  async addFile(test: BaseSyntheticEvent)
  {
    let fileList = test.target.files as FileList
    let file = fileList[0]
    this.state.strata.addFile(file)
    this.state.isUploadable = true
    console.log(this.state.isUploadable)
    
  }

  initEvents(e: BaseSyntheticEvent)
  {
    e.preventDefault()
    e.stopPropagation()
  }

  dragEnter(e: BaseSyntheticEvent)
  {
    this.initEvents(e);
    console.log("Enter")
  }
  dragLeave(e: BaseSyntheticEvent)
  {
    this.initEvents(e);
    console.log("Leave")
  }
  async drop(e: BaseSyntheticEvent)
  {
    this.initEvents(e);
    console.log("Drop")

    //@ts-ignore
    let fileList = e.dataTransfer.files as FileList
    let file = fileList[0]
    this.state.strata.addFile(file)
    this.state.isUploadable = true
    console.log("ok")
  }
  async click()
  {
    console.log("OK")
  }

  async upload()
  {
    let cid = await this.state.strata.uploadFile()
    this.setState({cid: `https://ipfs.io/ipfs/${cid}`});
  }

  render()
  {
    return (
      <>
      <VStack align={'stretch'}>
        <label
          id="dragndrop"
          onDragOver={this.dragEnter}
          onDragEnter={this.dragEnter}

          onDragLeave={this.dragLeave}
          onDragEnd={this.dragLeave}
          onDrop={this.drop}
          // onClick={this.click}

          htmlFor="fileUpload">
          <input type="file" onChange={this.addFile} multiple hidden={true} id={"fileUpload"} />
          <Box
            rounded={'lg'}
            // boxShadow={'lg'}
            borderStyle={'dotted'}
            borderWidth={'2px'}
            borderColor={'white'}
            p={8}
            align={'center'}
            justify={'center'}>
            <AiOutlineUpload color="white" size="30px" />
          </Box>
        </label>
        <Button isActive={this.state.isUploadable} onClick={this.upload} >Upload</Button>
        <Button hidden={this.state.cid == ""} onClick={async ()=>{await navigator.clipboard.writeText(this.state.cid)}}>Copy link</Button>
      </VStack>
      </>
    );
  }
}