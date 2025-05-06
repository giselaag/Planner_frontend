import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Modal,
} from 'react-native';

export default function Dropdown({ options = [], selected, onSelect, placeholder = 'Select option' }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (item) => {
    onSelect(item);
    setIsOpen(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.dropdown} onPress={() => setIsOpen(true)}>
        <Text style={styles.selectedText}>
          {selected?.label || placeholder}
        </Text>
      </TouchableOpacity>

      <Modal
        visible={isOpen}
        transparent
        animationType="fade"
        onRequestClose={() => setIsOpen(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPressOut={() => setIsOpen(false)}
        >
          <View style={styles.menu}>
            <FlatList
              data={options}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.option}
                  onPress={() => handleSelect(item)}
                >
                  <Text>{item.label}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  dropdown: {
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    backgroundColor: '#f9f9f9',
  },
  selectedText: {
    fontSize: 16,
    color: '#333',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  menu: {
    marginHorizontal: 40,
    backgroundColor: '#fff',
    borderRadius: 6,
    padding: 10,
    maxHeight: 300,
  },
  option: {
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
});