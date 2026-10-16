// components/PopupModal.tsx
import React from "react";
import { Modal, TouchableWithoutFeedback, View } from "react-native";
import { styles } from "./styles";

interface PopupModalProps {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const PopupModal: React.FC<PopupModalProps> = ({
  visible,
  onClose,
  children,
}) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay}>
          <TouchableWithoutFeedback>
            <View style={styles.modalContainer}>{children}</View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};
