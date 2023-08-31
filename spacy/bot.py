import spacy
from bot_brain import BotBrain

nlp = spacy.load('en_core_web_md')

class Chatbot:
    def __init__(self):
        self.brain = BotBrain()

    def respond(self, input):
        # Process input with spaCy
        doc = nlp(input)
        vector = doc.vector

        # Find closest question vector
        best_match = self.brain.find_closest_vector(vector)

        # Get response text
        return self.brain.get_response(best_match)

bot = Chatbot()
