import React, {FC} from "react";
import {HStack, VStack, Box} from "@chakra-ui/react";
import {step} from "src/server";
import {hexToRGB} from "src/util/colorConvert";

const {colors} = step;
const copiedText = "copied!";

const Step: FC = () => {

    const colorClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
        const divEle = e.target as HTMLDivElement;
        const colorText = divEle.innerText;
        if (colorText === copiedText) {
            return;
        }
        navigator.clipboard.writeText(colorText).then(() => {
            divEle.innerText = copiedText;

            setTimeout(() => {
                divEle.innerText = colorText;
            }, 1000);
        });
    };

    return (
        <Box
            bgColor="white"
        >
            <VStack
                pt="130px !important"
                pb="130px !important"
                rowGap="50px"
                p="15px"
                maxW="1400px"
                alignItems="flex-start"
                margin="0 auto"
                bgColor="white"
            >
                {
                    colors.map((stpeColor) => (
                        <HStack
                            key={stpeColor.reduce((v1, v2) => v1 + v2)}
                            columnGap="10px"
                            rowGap="25px"
                            p="15px"
                            flexWrap="wrap"
                        >
                            {
                                stpeColor.map((hex) => (
                                    <VStack
                                        alignItems="flex-start"
                                        fontSize="14px"
                                        color="rgba(73, 80, 87, 1)"
                                        m="0 !important"
                                        key={hex}
                                    >
                                        <Box
                                            bgColor={hex}
                                            w="100%"
                                            flexGrow={1}
                                            minW="120px"
                                            minH="60px"
                                            borderRadius="4px"
                                        >
                                        </Box>
                                        <Box
                                            onClick={colorClick}
                                            cursor="pointer"
                                            mt="0.3rem !important"
                                        >
                                            {hex}
                                        </Box>
                                        <Box
                                            onClick={colorClick}
                                            cursor="pointer"
                                            mt="0.3rem !important"
                                        >
                                            {hexToRGB(hex)}
                                        </Box>
                                    </VStack>
                                ))
                            }
                        </HStack>
                    ))
                }
            </VStack>
        </Box>
    );
};

export default Step;