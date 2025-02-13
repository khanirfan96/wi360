import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Modal } from 'react-native';
import { MessageSquare, Smartphone, X, ArrowLeft, Search } from 'lucide-react-native';
import BackButton from '../components/BackButton';
import TabBar from '../components/TabBar';

// Add these interfaces near the top of the file
interface Message {
  id: number;
  deviceId: string;
  date: string;
  size: string;
  content: string;
}

interface MessageListProps {
  data: Message[];
  isModal?: boolean;
}

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  const messages = [
    {
      id: 1, deviceId: '24e124535e176260', date: '29 Oct 2023', size: '329.4 MB',
      content: '{ "_id": {"$id": "679f8079bbb47319f1d35b377"}, "cdr": true, "data": "AXVd", "tcnt": 6153, "host": 85, "devEUI": "24e124535e176260", "ok"}'
    },
    {
      id: 2, deviceId: '24e124535e176260', date: '29 Oct 2023', size: '329.4 MB',
      content: '{ "_id": {"$id": "679f8079bbb47319f1d35b377"}, "cdr": true, "data": "AXVd", "tcnt": 6153, "host": 85, "devEUI": "24e124535e176260", "ok"}'
    },
    {
      id: 3, deviceId: '24e124535e176260', date: '29 Oct 2023', size: '329.4 MB',
      content: 'dr: true, "data": "AXVd", "tcnt": 6153, "host": 85, "devEUI": "24e124535e176260", "ok"}'
    },
  ];

  const MessageList = ({ data, isModal = false }: MessageListProps) => (
    <View style={[styles.messageContainer, isModal && styles.modalMessageContainer]}>
      {data.map((msg, index) => (
        <View key={index} style={styles.messageRow}>
          <View style={styles.messageHeader}>
            <Text style={styles.messageId}>Id: {msg.id} {msg.deviceId}</Text>
            <Text style={styles.messageDate}>{msg.date} | {msg.size}</Text>
          </View>
          <Text style={styles.messageContent} numberOfLines={2}>{msg.content}</Text>
        </View>
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <Text style={styles.sectionTitle}>Overview</Text>
        <View style={styles.overviewContainer}>
          <View style={styles.statsCard}>
            <MessageSquare size={24} color="#0066FF" />
            <Text style={styles.statsNumber}>1,94,988</Text>
            <Text style={styles.statsDescription}>Total Messages From All Your Devices.</Text>
          </View>

          <View style={styles.statsCard}>
            <Smartphone size={24} color="#0066FF" />
            <Text style={styles.statsNumber}>23</Text>
            <Text style={styles.statsDescription}>Devices On The Network</Text>
          </View>
        </View>

        {/* Device Map Section */}
        <View style={styles.mapSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Device map</Text>
            <TouchableOpacity>
              <Text style={styles.linkText}>Location →</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.mapContainer}>
            <Text style={styles.mapPlaceholder}>Map</Text>
          </View>
        </View>

        {/* Recent Messages Section */}
        <View style={styles.messagesSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recent Messages</Text>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Text style={styles.linkText}>View More →</Text>
            </TouchableOpacity>
          </View>

          <MessageList data={messages.slice(0, 3)} />
        </View>

        {/* Messages Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalView}>
            <View style={styles.modalHeader}>
              <View style={styles.modalHeaderLeft}>
                <BackButton onPress={() => setModalVisible(false)} />
                <Text style={styles.modalTitle}>Recent Messages</Text>
              </View>
              <TouchableOpacity>
                <Search color="#FFFFFF" size={24} />
              </TouchableOpacity>
            </View>
            <ScrollView
              style={styles.modalContent}
              showsVerticalScrollIndicator={false}
            >
              <MessageList data={messages} isModal={true} />
            </ScrollView>
          </View>
        </Modal>
      </ScrollView>
      <TabBar />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
  scrollContainer:{
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 0,
  },
  overviewContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical:10
  },
  statsCard: {
    backgroundColor: '#252525',
    padding: 16,
    borderRadius: 8,
    width: '48%',
    borderWidth: 1,
    borderColor: '#CBCBCB',
  },
  statsNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFAE00',
    marginVertical: 8,
  },
  statsDescription: {
    fontSize: 14,
    color: '#888888',
  },
  mapSection: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical:10
  },
  linkText: {
    color: '#0066FF',
    fontSize: 14,
  },
  mapContainer: {
    backgroundColor: '#252525',
    height: 200,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#CBCBCB',
  },
  mapPlaceholder: {
    color: '#FFFFFF',
  },
  messagesSection: {
    marginBottom: 24,
    marginTop: 8,
    backgroundColor: '#1A1A1A',
    width: 'auto',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#CBCBCB',
    paddingHorizontal: 16,
  },
  messageCard: {
    backgroundColor: '#252525',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  messageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  messageId: {
    color: '#FFFFFF',
    fontSize: 13,
  },
  messageDate: {
    color: '#666666',
    fontSize: 12,
  },
  messageContent: {
    color: '#666666',
    fontSize: 12,
    lineHeight: 16,
  },
  titleContainer: {
    backgroundColor: '#1E1E1E',
    flex: 1
  },
  round: {
    width: 200,
    height: 200
  },
  text: {
    color: 'white'
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  messageContainer: {
    backgroundColor: '#1A1A1A',
    borderRadius: 8,
    overflow: 'hidden',
  },
  messageRow: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#333333',
  },
  modalMessageContainer: {
    backgroundColor: '#252525',
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 8,
  },
  modalView: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#1A1A1A',
    borderBottomWidth: 1,
    borderBottomColor: '#333333',
  },
  modalHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  modalContent: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
});
