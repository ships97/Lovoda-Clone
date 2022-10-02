import React from 'react';



import {Input,Box,Button, Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,Heading,Image,Checkbox,Radio,Grid,GridItem,Center  } from "@chakra-ui/react"

    import { Link } from 'react-router-dom';
import Subtotal from './Subtotal';
import { useSelector } from 'react-redux';

import { useMediaQuery } from "react-responsive";

const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 });
    return isDesktop ? children : null;
  };
  const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
    return isTablet ? children : null;
  };
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return isMobile ? children : null;
  };
  const Default = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 768 });
    return isNotMobile ? children : null;
  };

const Shipping = () => {
    const user=useSelector((state)=>state.AuthReducer.user)
    return (
       <>
       <Desktop>
       <Box display="flex" justifyContent="center" gap="2rem" >
        <Box width="40%" mt="4rem" >
        <Image
                borderRadius='full'
            
                width="120px"
                height="60px"
                src='https://cdn.shopify.com/s/files/1/0627/7388/7215/files/04122019_logo2_x320.png?v=1645644264'
                alt='website-img'
                />
  <Breadcrumb separator='>' fontSize="sm" color="black" mt="2rem" display="flex" justifyContent="start" >
        <BreadcrumbItem color="blue.300">
            <BreadcrumbLink href='#'>Cart</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem color="blue.300">
            <BreadcrumbLink href='#'>Information</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href='#'>Shipping</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href='#'>Payment</BreadcrumbLink>
        </BreadcrumbItem>

        
</Breadcrumb>
            {/* contact information */}
           <Box border="1px solid grey" mt="2rem"  mb="2rem">
            <Box display="flex" justifyContent="space-between" mt="0.6rem" mb="0.6rem" pl="0.5rem" pr="0.5rem" borderRadius="12px" >
                <Heading fontWeight="light" as="h6" size="sm" >Contact</Heading>
                <Heading fontWeight="light" as="h6" size="sm" >{user}</Heading>
                <Button fontSize="sm" color="blue.400" backgroundColor="white" height="auto" >Change</Button>
            </Box>

        <hr />
        <Box display="flex" justifyContent="space-between" mt="0.6rem" mb="0.6rem" pl="0.5rem" pr="0.5rem" borderRadius="12px" >
                <Heading fontWeight="light" as="h6" size="sm" >Ship to</Heading>
                <Heading fontWeight="light" as="h6" size="sm" >India</Heading>
                <Button fontSize="sm" color="blue.400" backgroundColor="white" height="auto" >Change</Button>
            </Box>
          </Box>


             {/* shipping method */}
         <Heading fontWeight="light" as="h6" size="md" display="flex" mb="1rem"  >Shipping method</Heading>
           
           <Box border="1px solid grey" pl="1rem"  >

                <Box display="flex" gap="1rem" mt="1rem"  mb="1rem"  >
                    <Box   >
                            <input type="radio" />
                    </Box>
                        <Grid  templateColumns='repeat(5, 1fr)' gap="14rem" >
                            <Box >
                            <Heading fontWeight="light" as="h6" size="sm" mr="3.5rem" >Economy</Heading>
                                <Heading  fontWeight="light" as="h6" size="xs" >5 to 8 business days</Heading>
                            </Box>
                            
                            <Box>

                            <Heading fontWeight="light" as="h6" size="sm" >$4.00</Heading>
                            </Box>
                        </Grid>
                    
                </Box>
            <hr />
                <Box display="flex" gap="1rem" mt="1rem"  mb="1rem" >
                    <Box   >
                            <input type="radio" />
                    </Box>
                        <Box display="flex" gap="14rem"   >
                            <Box >
                            <Heading fontWeight="light" as="h6" size="sm"  >USPS Priority Mail</Heading>
                                <Heading  fontWeight="light" as="h6" size="xs"  >2 business days</Heading>
                            </Box>
                            <Heading fontWeight="light" as="h6" size="sm" >$7.00</Heading>
                        </Box>
                    
                </Box>
            <hr />
                <Box display="flex" gap="1rem" mt="1rem"  mb="1rem" >
                    <Box   >
                            <input type="radio" />
                    </Box>
                        <Box display="flex" gap="15rem"   >
                            <Box >
                            <Heading fontWeight="light" as="h6" size="sm" >UPS @ Ground</Heading>
                                <Heading  fontWeight="light" as="h6" size="xs" >2 business days</Heading>
                            </Box>
                            <Heading fontWeight="light" as="h6" size="sm" >$4.00</Heading>
                        </Box>
                    
                </Box>
             </Box>
  <Box>
  

   
    

    <Box mt="1rem" display="flex" justifyContent="space-between" >
        <Link to="/information">
    <Button fontSize="sm" colorScheme='white' color="blue.300" variant='solid'>
           {"<"} Return to information
    </Button>
    </Link>
    <Link to="/payment" >

    <Button fontSize="sm" colorScheme='black' backgroundColor="black" variant='solid'>
            Continue to payment
    </Button>
    </Link>
    </Box>



 <Breadcrumb separator='' fontSize="sm" color="blue.300" mt="5rem" display="flex" justifyContent="start" >
        <BreadcrumbItem>
            <BreadcrumbLink href='#'>Refund policy</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
            <BreadcrumbLink href='#'>Shipping policy</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href='#'>Privacy policy</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href='#'>Teams of services</BreadcrumbLink>
        </BreadcrumbItem>

        
</Breadcrumb>

  
  </Box>

        </Box>


        {/* subtotal */}
           <Subtotal/>
    </Box>
       </Desktop>




       <Tablet>
       <Box display="grid" gap="2rem" >
       <Subtotal/>
       <Center>
        <Box width="80%" mt="4rem" mr="4rem">
        <Image
                borderRadius='full'
            
                width="120px"
                height="60px"
                src='https://cdn.shopify.com/s/files/1/0627/7388/7215/files/04122019_logo2_x320.png?v=1645644264'
                alt='website-img'
                />
  <Breadcrumb separator='>' fontSize="sm" color="black" mt="2rem" display="flex" justifyContent="start" >
        <BreadcrumbItem color="blue.300">
            <BreadcrumbLink href='#'>Cart</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem color="blue.300">
            <BreadcrumbLink href='#'>Information</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href='#'>Shipping</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href='#'>Payment</BreadcrumbLink>
        </BreadcrumbItem>

        
</Breadcrumb>
            {/* contact information */}
           <Box border="1px solid grey" mt="2rem"  mb="2rem" width={"55%"} >
            <Box display="flex" justifyContent="space-between" mt="0.6rem" mb="0.6rem" pl="0.5rem" pr="0.5rem" borderRadius="12px" >
                <Heading fontWeight="light" as="h6" size="sm" >Contact</Heading>
                <Heading fontWeight="light" as="h6" size="sm" >{user}</Heading>
                <Button fontSize="sm" color="blue.400" backgroundColor="white" height="auto" >Change</Button>
            </Box>

        <hr />
        <Box display="flex" justifyContent="space-between" mt="0.6rem" mb="0.6rem" pl="0.5rem" pr="0.5rem" borderRadius="12px" >
                <Heading fontWeight="light" as="h6" size="sm" >Ship to</Heading>
                <Heading fontWeight="light" as="h6" size="sm" >India</Heading>
                <Button fontSize="sm" color="blue.400" backgroundColor="white" height="auto" >Change</Button>
            </Box>
          </Box>


             {/* shipping method */}
         <Heading fontWeight="light" as="h6" size="md" display="flex" mb="1rem" width={"70%"}  >Shipping method</Heading>
           
           <Box border="1px solid grey" pl="1rem"  width={"55%"}>

                <Box display="flex" gap="1rem" mt="1rem"  mb="1rem" >
                    <Box   >
                            <input type="radio" />
                    </Box>
                        <Grid  templateColumns='repeat(5, 1fr)' gap="14rem" >
                            <Box >
                            <Heading fontWeight="light" as="h6" size="sm" mr="3.5rem" >Economy</Heading>
                                <Heading  fontWeight="light" as="h6" size="xs" >5 to 8 business days</Heading>
                            </Box>
                            
                            <Box>

                            <Heading fontWeight="light" as="h6" size="sm" >$4.00</Heading>
                            </Box>
                        </Grid>
                    
                </Box>
            <hr />
                <Box display="flex" gap="1rem" mt="1rem"  mb="1rem" >
                    <Box   >
                            <input type="radio" />
                    </Box>
                        <Box display="flex" gap="14rem"   >
                            <Box >
                            <Heading fontWeight="light" as="h6" size="sm"  >USPS Priority Mail</Heading>
                                <Heading  fontWeight="light" as="h6" size="xs"  >2 business days</Heading>
                            </Box>
                            <Heading fontWeight="light" as="h6" size="sm" >$7.00</Heading>
                        </Box>
                    
                </Box>
            <hr />
                <Box display="flex" gap="1rem" mt="1rem"  mb="1rem" >
                    <Box   >
                            <input type="radio" />
                    </Box>
                        <Box display="flex" gap="15rem"   >
                            <Box >
                            <Heading fontWeight="light" as="h6" size="sm" >UPS @ Ground</Heading>
                                <Heading  fontWeight="light" as="h6" size="xs" >2 business days</Heading>
                            </Box>
                            <Heading fontWeight="light" as="h6" size="sm" >$4.00</Heading>
                        </Box>
                    
                </Box>
             </Box>
  <Box>
  

   
    

    <Box mt="1rem" display="flex" justifyContent="space-between" width={"55%"} >
        <Link to="/information">
    <Button fontSize="sm" colorScheme='white' color="blue.300" variant='solid'>
           {"<"} Return to information
    </Button>
    </Link>
    <Link to="/payment" >

    <Button fontSize="sm" colorScheme='black' backgroundColor="black" variant='solid'>
            Continue to payment
    </Button>
    </Link>
    </Box>



 <Breadcrumb separator='' fontSize="sm" color="blue.300" mt="5rem" display="flex" justifyContent="start" >
        <BreadcrumbItem>
            <BreadcrumbLink href='#'>Refund policy</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
            <BreadcrumbLink href='#'>Shipping policy</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href='#'>Privacy policy</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href='#'>Teams of services</BreadcrumbLink>
        </BreadcrumbItem>

        
</Breadcrumb>

  
  </Box>

        </Box>

</Center>

        {/* subtotal */}
         
    </Box>
       </Tablet>

       <Mobile>
      
       <Box display="grid" gap="2rem" >
       <Subtotal/>
       <Center>
        <Box width="80%" mt="4rem" mr="4rem">
        <Image
                borderRadius='full'
            
                width="120px"
                height="60px"
                src='https://cdn.shopify.com/s/files/1/0627/7388/7215/files/04122019_logo2_x320.png?v=1645644264'
                alt='website-img'
                />
  <Breadcrumb separator='>' fontSize="sm" color="black" mt="2rem" display="flex" justifyContent="start" >
        <BreadcrumbItem color="blue.300">
            <BreadcrumbLink href='#'>Cart</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem color="blue.300">
            <BreadcrumbLink href='#'>Information</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href='#'>Shipping</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href='#'>Payment</BreadcrumbLink>
        </BreadcrumbItem>

        
</Breadcrumb>
            {/* contact information */}
           <Box border="1px solid grey" mt="2rem"  mb="2rem" width={"40%"} >
            <Box display="flex" justifyContent="space-between" mt="0.6rem" mb="0.6rem" pl="0.5rem" pr="0.5rem" borderRadius="12px" >
                <Heading fontWeight="light" as="h6" size="sm" >Contact</Heading>
                <Heading fontWeight="light" as="h6" size="sm" >{user}</Heading>
                <Button fontSize="sm" color="blue.400" backgroundColor="white" height="auto" >Change</Button>
            </Box>

        <hr />
        <Box display="flex" justifyContent="space-between" mt="0.6rem" mb="0.6rem" pl="0.5rem" pr="0.5rem" borderRadius="12px" >
                <Heading fontWeight="light" as="h6" size="sm" >Ship to</Heading>
                <Heading fontWeight="light" as="h6" size="sm" >India</Heading>
                <Button fontSize="sm" color="blue.400" backgroundColor="white" height="auto" >Change</Button>
            </Box>
          </Box>


             {/* shipping method */}
         <Heading fontWeight="light" as="h6" size="md" display="flex" mb="1rem" width={"40%"}  >Shipping method</Heading>
           
           <Box border="1px solid grey" pl="1rem" width={"40%"}>

                <Box display="flex" gap="1rem" mt="1rem"  mb="1rem" >
                    <Box   >
                            <input type="radio" />
                    </Box>
                        <Grid  templateColumns='repeat(5, 1fr)' gap="14rem" >
                            <Box >
                            <Heading fontWeight="light" as="h6" size="sm" mr="3.5rem" >Economy</Heading>
                                <Heading  fontWeight="light" as="h6" size="xs" >5 to 8 business days</Heading>
                            </Box>
                            
                            <Box>

                            <Heading fontWeight="light" as="h6" size="sm" mr="10rem" >$4.00</Heading>
                            </Box>
                        </Grid>
                    
                </Box>
            <hr />
                <Box display="flex" gap="1rem" mt="1rem"  mb="1rem" >
                    <Box   >
                            <input type="radio" />
                    </Box>
                        <Box display="flex" gap="14rem"   >
                            <Box >
                            <Heading fontWeight="light" as="h6" size="sm"  >USPS Priority Mail</Heading>
                                <Heading  fontWeight="light" as="h6" size="xs"  >2 business days</Heading>
                            </Box>
                            <Heading fontWeight="light" as="h6" size="sm" >$7.00</Heading>
                        </Box>
                    
                </Box>
            <hr />
                <Box display="flex" gap="1rem" mt="1rem"  mb="1rem" >
                    <Box   >
                            <input type="radio" />
                    </Box>
                        <Box display="flex" gap="15rem"   >
                            <Box >
                            <Heading fontWeight="light" as="h6" size="sm" >UPS @ Ground</Heading>
                                <Heading  fontWeight="light" as="h6" size="xs" >2 business days</Heading>
                            </Box>
                            <Heading fontWeight="light" as="h6" size="sm" >$4.00</Heading>
                        </Box>
                    
                </Box>
             </Box>
  <Box>
  

   
    

    <Box mt="1rem" display="grid" justifyContent="center" width={"40%"} >
    <Link to="/payment" >

    <Button fontSize="sm" colorScheme='black' backgroundColor="black" variant='solid'>
            Continue to payment
    </Button>
    </Link>
        <Link to="/information">
    <Button fontSize="sm" colorScheme='white' color="blue.300" variant='solid'>
           {"<"} Return to information
    </Button>
    </Link>
    </Box>



 <Breadcrumb separator='' fontSize="sm" color="blue.300" mt="5rem" display="flex" justifyContent="start" >
        <BreadcrumbItem>
            <BreadcrumbLink href='#'>Refund policy</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
            <BreadcrumbLink href='#'>Shipping policy</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href='#'>Privacy policy</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href='#'>Teams of services</BreadcrumbLink>
        </BreadcrumbItem>

        
</Breadcrumb>

  
  </Box>

        </Box>

</Center>

        {/* subtotal */}
         
    </Box>
      
       </Mobile>
       </>
);

   
};

export default Shipping;