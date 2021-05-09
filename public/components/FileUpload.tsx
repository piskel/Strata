
import { useColorModeValue } from '@chakra-ui/color-mode';
import { Box, Heading, Text } from '@chakra-ui/layout';
import { StylesProvider } from '@chakra-ui/system';
import { TagLabel } from '@chakra-ui/tag';
import React from 'react';
import ReactDOM from 'react-dom';

import {GoPlus} from 'react-icons/go'

// function UploadBox()
// {
//     return (
//         <Box
//         rounded={'lg'}
//         boxShadow={'lg'}
//         p={8}
//         bg={useColorModeValue('gray.700', 'white')}>

//         </Box>
//     );
// }


export default class FileUpload extends React.Component {
  state = {
    loading: false,
  };
  
  dragEnter()
  {
    console.log("OK")
  }
  dragLeave()
  {

    console.log("OK1")
  }
  dragOver()
  {

    console.log("OK2")
  }
  drop()
  {
    console.log("OK3")
  }


  render() {
    return (
        <Box>
            <input type="file" multiple hidden={true} id={"fileUpload"}/>
            <label
            onDragEnter={this.dragEnter}
            onDragLeave={this.dragLeave}
            onDragOver={this.dragOver}
            onDrop={this.drop}
            htmlFor="fileUpload">
                <Box
                rounded={'lg'}
                // boxShadow={'lg'}
                borderStyle={'dotted'}
                borderWidth={'2px'}
                borderColor={'white'}
                p={8}
                align={'center'}
                justify={'center'}>
                    <GoPlus color="white"/>
                </Box>
            </label>
        </Box>
    );
  }
}