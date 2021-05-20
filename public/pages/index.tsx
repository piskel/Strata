import { Button } from "@chakra-ui/button";
import { Checkbox } from "@chakra-ui/checkbox";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box, Container, Flex, Heading, Link, Stack, Text } from "@chakra-ui/layout";
import React from "react";
import FileUpload from "../components/FileUpload";


export default function Index() {
    
    return(
        <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'} fontWeight={"black"}>STRATA</Heading>
                    <Text fontSize={'lg'} color={'gray.600'}>
                    Serverless file-sharing 📦
                    </Text>
                </Stack>

                <Box
                rounded={'lg'}
                bg={useColorModeValue('white', 'gray.700')}
                boxShadow={'lg'}
                p={8}>
                    <FileUpload/>
                </Box>
            </Stack>
        </Flex>
    );
};