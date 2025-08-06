       setConversation(prev => [
         ...prev.filter(msg => msg.message !== '...Nova is writing a response'),
       ]);
-      
-      // Clear services after processing the response
-      setServices([]);
     } catch (err) {