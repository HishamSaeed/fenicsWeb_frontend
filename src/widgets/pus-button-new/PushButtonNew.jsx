import React, { useEffect, useState }  from 'react';
import { Button, Flex } from 'antd';

const PushButtonNew = ({ onPushed, label = '', disabled$ = null}) => {
    
    const [isDisabled, setDisabled] = useState(false)

    useEffect(() => {
      let sub;
      if(disabled$) {
        sub = disabled$.subscribe(disabled => {
          setDisabled(disabled)
      })
      }

      return () => {
        if ( sub ) {
          sub.unsubscribe();
        }
      }
    }, [])

    return (
        <Flex gap="small" wrap="wrap">
          <Button shape="round" onClick={onPushed} disabled={isDisabled}>{label}</Button>
        </Flex>
    );
}

export default PushButtonNew;
