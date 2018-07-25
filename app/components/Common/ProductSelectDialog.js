import React from 'react';
import PropTypes from 'prop-types';
import { ListView } from 'react-native';
import PopupDialog, { DialogTitle } from 'react-native-popup-dialog';
import { ListItem, FontAwesome, Text } from 'react-native-elements';
import _ from 'lodash';

const ProductSelectDialog = (props) => {
  const {
    isShow,
    onPress,
    selected,
    productList,
  } = props;

  console.log('ABC', productList);

  return (
    <PopupDialog
      dialogTitle={<DialogTitle title='Product List' />}
      show={isShow}
      width={0.85}
      height={350}
      dismissOnTouchOutside={false}
    >
      {!_.isEmpty(productList) ?
      <ListView
        dataSource={productList}
        renderRow={
          (rowData, sectionId, rowId) => (
            <ListItem
              key={rowId}
              onPress={onPress}
              title={rowData.name}
              rightIcon={rowId === selected ? <FontAwesome name='check' /> : null }
            />
          )
        }
      >
      </ListView>
      : <Text>You don't have any device</Text>
      }
    </PopupDialog>
  );
};

ProductSelectDialog.defaultProps = {
  productList: [],
};

ProductSelectDialog.propTypes = {
  isShow: PropTypes.bool,
  selected: PropTypes.number,
  onPress: PropTypes.func,
  productList: PropTypes.array,
};


export default ProductSelectDialog;