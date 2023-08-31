import numpy as np
from scipy import spatial

class BotBrain:

    def __init__(self):
        self.index_vectors()

    def index_vectors(self):
        # Index all question vectors
        self.question_vectors = {}
        for question in all_questions:
            doc = nlp(question)
            self.question_vectors[question] = doc.vector

    def find_closest_vector(self, input_vector):
        best_sim = -1
        best_question = None

        for question, vector in self.question_vectors.items():
            sim = 1 - spatial.distance.cosine(vector, input_vector)
            if sim > best_sim:
                best_question = question
                best_sim = sim

        return best_question

    def get_response(self, question):
        # Lookup response for question
        return response
